package com.eryaz.okusis.domain;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A OkuSofor.
 */
@Entity
@Table(name = "oku_sofor")
public class OkuSofor implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "kod")
    private String kod;

    @Column(name = "isim")
    private String isim;

    @Column(name = "tel")
    private String tel;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKod() {
        return kod;
    }

    public OkuSofor kod(String kod) {
        this.kod = kod;
        return this;
    }

    public void setKod(String kod) {
        this.kod = kod;
    }

    public String getIsim() {
        return isim;
    }

    public OkuSofor isim(String isim) {
        this.isim = isim;
        return this;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String getTel() {
        return tel;
    }

    public OkuSofor tel(String tel) {
        this.tel = tel;
        return this;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }
    // jhipster-needle-entity-add-getters-setters - Jhipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OkuSofor okuSofor = (OkuSofor) o;
        if (okuSofor.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), okuSofor.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "OkuSofor{" +
            "id=" + getId() +
            ", kod='" + getKod() + "'" +
            ", isim='" + getIsim() + "'" +
            ", tel='" + getTel() + "'" +
            "}";
    }
}
