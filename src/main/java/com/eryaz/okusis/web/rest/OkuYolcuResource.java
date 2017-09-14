package com.eryaz.okusis.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.eryaz.okusis.domain.OkuYolcu;
import com.eryaz.okusis.service.OkuYolcuService;
import com.eryaz.okusis.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing OkuYolcu.
 */
@RestController
@RequestMapping("/api")
public class OkuYolcuResource {

    private final Logger log = LoggerFactory.getLogger(OkuYolcuResource.class);

    private static final String ENTITY_NAME = "okuYolcu";

    private final OkuYolcuService okuYolcuService;

    public OkuYolcuResource(OkuYolcuService okuYolcuService) {
        this.okuYolcuService = okuYolcuService;
    }

    /**
     * POST  /oku-yolcus : Create a new okuYolcu.
     *
     * @param okuYolcu the okuYolcu to create
     * @return the ResponseEntity with status 201 (Created) and with body the new okuYolcu, or with status 400 (Bad Request) if the okuYolcu has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/oku-yolcus")
    @Timed
    public ResponseEntity<OkuYolcu> createOkuYolcu(@RequestBody OkuYolcu okuYolcu) throws URISyntaxException {
        log.debug("REST request to save OkuYolcu : {}", okuYolcu);
        if (okuYolcu.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new okuYolcu cannot already have an ID")).body(null);
        }
        OkuYolcu result = okuYolcuService.save(okuYolcu);
        return ResponseEntity.created(new URI("/api/oku-yolcus/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /oku-yolcus : Updates an existing okuYolcu.
     *
     * @param okuYolcu the okuYolcu to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated okuYolcu,
     * or with status 400 (Bad Request) if the okuYolcu is not valid,
     * or with status 500 (Internal Server Error) if the okuYolcu couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/oku-yolcus")
    @Timed
    public ResponseEntity<OkuYolcu> updateOkuYolcu(@RequestBody OkuYolcu okuYolcu) throws URISyntaxException {
        log.debug("REST request to update OkuYolcu : {}", okuYolcu);
        if (okuYolcu.getId() == null) {
            return createOkuYolcu(okuYolcu);
        }
        OkuYolcu result = okuYolcuService.save(okuYolcu);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, okuYolcu.getId().toString()))
            .body(result);
    }

    /**
     * GET  /oku-yolcus : get all the okuYolcus.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of okuYolcus in body
     */
    @GetMapping("/oku-yolcus")
    @Timed
    public List<OkuYolcu> getAllOkuYolcus() {
        log.debug("REST request to get all OkuYolcus");
        return okuYolcuService.findAll();
        }

    /**
     * GET  /oku-yolcus/:id : get the "id" okuYolcu.
     *
     * @param id the id of the okuYolcu to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the okuYolcu, or with status 404 (Not Found)
     */
    @GetMapping("/oku-yolcus/{id}")
    @Timed
    public ResponseEntity<OkuYolcu> getOkuYolcu(@PathVariable Long id) {
        log.debug("REST request to get OkuYolcu : {}", id);
        OkuYolcu okuYolcu = okuYolcuService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(okuYolcu));
    }

    /**
     * DELETE  /oku-yolcus/:id : delete the "id" okuYolcu.
     *
     * @param id the id of the okuYolcu to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/oku-yolcus/{id}")
    @Timed
    public ResponseEntity<Void> deleteOkuYolcu(@PathVariable Long id) {
        log.debug("REST request to delete OkuYolcu : {}", id);
        okuYolcuService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
